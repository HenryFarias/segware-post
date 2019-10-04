package br.com.segware.post.controller;

import br.com.segware.post.request.LoginRequest;
import br.com.segware.post.request.PostSaveRequest;
import br.com.segware.post.response.UserResponse;
import br.com.segware.post.service.PostService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.util.Collections;
import java.util.Map;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class PostControllerTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

    @MockBean
    private PostService service;

    private UserResponse userLogged;

    @Autowired
    private ObjectMapper objectMapper;

    @Before
    public void login() throws JsonProcessingException {
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setUsername("admin@mail.com");
        loginRequest.setPassword("123");

        ResponseEntity<UserResponse> responseEntity = this.testRestTemplate.postForEntity("/login", loginRequest, UserResponse.class);
        userLogged = responseEntity.getBody();

        testRestTemplate.getRestTemplate().setInterceptors(
            Collections.singletonList((request, body, execution) -> {
                request.getHeaders()
                        .add("Authorization", "Bearer " + userLogged.getToken());
                return execution.execute(request, body);
            }));
    }

    @Test
    public void savePostSuccess() {
        PostSaveRequest request = new PostSaveRequest();
        request.setDescription("teste");
        ResponseEntity<PostSaveRequest> responseEntity = this.testRestTemplate.postForEntity("/post", request, PostSaveRequest.class);
        Assert.assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
    }

    @Test
    public void addUpVoteSuccess() {
        Mockito.doNothing().when(service).delete(10L);
        ResponseEntity<String> responseEntity = this.testRestTemplate.postForEntity("/post/10/add/upVote", null, String.class);
        Assert.assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }

    @Test
    public void removeUpVoteSuccess() {
        Mockito.doNothing().when(service).delete(10L);
        ResponseEntity<String> responseEntity = this.testRestTemplate.postForEntity("/post/10/remove/upVote", null, String.class);
        Assert.assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }

    @Test
    public void deletePostSuccess() {
        Mockito.doNothing().when(service).delete(10L);
        ResponseEntity<String> response  = testRestTemplate.exchange("/post/10", HttpMethod.DELETE, null, String.class);
        Assert.assertEquals(HttpStatus.OK, response.getStatusCode());
    }
}
