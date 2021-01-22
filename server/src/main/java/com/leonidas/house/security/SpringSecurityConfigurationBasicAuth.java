package com.leonidas.house.security;

import com.leonidas.house.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;


@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter {

    private UserServiceImpl usersService;
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    private Environment environment;


    @Autowired
    public SpringSecurityConfigurationBasicAuth(UserServiceImpl usersService, BCryptPasswordEncoder bCryptPasswordEncoder,Environment environment)
    {
        this.environment =environment;
        this.usersService = usersService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }



    @Override
    protected void configure(HttpSecurity http) throws Exception {

http.csrf().disable();

        http.authorizeRequests().
                antMatchers("/houses/**").permitAll().
                antMatchers("/users/**").permitAll().
                antMatchers("/static/**").permitAll().
                antMatchers("/").permitAll().
                antMatchers(HttpMethod.OPTIONS,"**").permitAll().
                anyRequest().authenticated().and()

                .addFilter(getAuthenticationFilter())
                .addFilter(getAuthorizationFilter())

        ;
      http.headers().frameOptions().disable();



        }




    private AuthenticationFilter getAuthenticationFilter() throws Exception
    {
        AuthenticationFilter authenticationFilter = new AuthenticationFilter(usersService, environment, authenticationManager());
        authenticationFilter.setAuthenticationManager(authenticationManager());
        authenticationFilter.setFilterProcessesUrl("/users/login");
        return authenticationFilter;
    }
    private JWTAuthorizationFilter getAuthorizationFilter() throws Exception {
       return  new JWTAuthorizationFilter(authenticationManager());
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(usersService).passwordEncoder(bCryptPasswordEncoder);
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST","OPTIONS"));
        configuration.setExposedHeaders(Arrays.asList("token", "content-type"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }



}
