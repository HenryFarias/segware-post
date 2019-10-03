package br.com.segware.post.security;

import br.com.segware.post.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserDetail implements UserDetailsService {

    private final UserService userService;

    @Autowired
    public UserDetail(UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return Optional.ofNullable(userService.findByEmail(email))
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado"));
    }
}
