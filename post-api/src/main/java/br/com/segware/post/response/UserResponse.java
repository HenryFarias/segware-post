package br.com.segware.post.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {

    @JsonInclude
    private Long id;

    @JsonInclude
    private String name;

    @JsonInclude
    private String email;

    @JsonInclude
    private ProfileResponse profile;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<String> roles;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String token;
}
