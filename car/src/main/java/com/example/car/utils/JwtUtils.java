package com.example.car.utils;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtUtils {
//    @Value("${app.jwt-secret}")
//    private String jwtSecret;
//
//    @Value("${app.jwt-expiration}")
//    private long jwtExpirationDate;

    private static  final String SECRET ="DGEF7R3R9404I34R8R23U8FWQLDNQWDWQKNCLEWFNOI4R844RI4R87465TREBFDDJ";
    public String createToken(Map<String,Object> claims , String userName){
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userName)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+1000*60*24))
                .signWith(getSingInKey(), SignatureAlgorithm.HS256)
//                .signWith( SignatureAlgorithm.HS256,getSingInKey())
                .compact();
    }
    private Key getSingInKey() {
        byte[]  keyBytes= Decoders.BASE64.decode(SECRET);
        return Keys.hmacShaKeyFor(keyBytes);
    }
    public  String generateToken(String userName){
        Map<String,Object> claims= new HashMap<>();
        return  createToken(claims,userName);
    }

    private Claims extractAllClaims(String token) {
        return  Jwts
                .parser()
                .setSigningKey(getSingInKey())
                .parseClaimsJws(token)
                .getBody();
    }
    private <T> T extractClaim(String token, Function<Claims,T> claimsResolver) {
        final Claims claims=extractAllClaims(token);
        return  claimsResolver.apply(claims);
    }
    public Date extractExpiration(String token){
        return  extractClaim(token,  Claims::getExpiration);
    }
    public String extractUserName(String token) {
        return extractClaim(token, Claims::getSubject);
    }
    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }
    public Boolean isTokenValid(String token, UserDetails userDetails){
        final String username=extractUserName(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));

    }
}
