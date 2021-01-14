package com.leonidas.house.utilities;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.leonidas.house.constant.SecurityConstant;
import org.springframework.beans.factory.annotation.Value;

import java.nio.file.attribute.UserPrincipal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class JwtTokenProvider {

//    @Value("${jwt.secret}")
//    private String secret;
//
//    public String generateJwtToken(UserPrincipal userPrincipal){
//        String claims = getClaimsFromUser(userPrincipal);
//        return JWT.create().withIssuer(SecurityConstant.GET_ARRAYS_LLC)
//                .withAudience(SecurityConstant.GET_ARRAYS_ADMINISTRATION)
//                .withIssuedAt(new Date())
//                .withSubject(userPrincipal.getName())
//                .withArrayClaim(SecurityConstant.AUTHORITIES,claims)
//                .withExpiresAt(new Date(System.currentTimeMillis() + SecurityConstant.EXPIRATION_TIME)
//                .sign(Algorithm.HMAC512(secret.getBytes()));
//
//    }
//
//    private String getClaimsFromUser(UserPrincipal user) {
//        List<String> authorities = new ArrayList<>();
////        for(GrantedAuthority grantedAuthority : user.getAuthorities())
//    return  "s";
//    }}
}