package br.com.segware.post.response;

import lombok.Data;

import java.util.Set;

@Data
public class PostListResponse {

    private Long id;
    private String description;
    private Set<UserResponse> usersUpVotes;
    private UserResponse user;

}
