package br.com.segware.post.gcp;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class GCPService {

    @Value("${url.google.cloud.functions.subtituir-palavrao}")
    private String urlSubstituirPalavrao;

    private final ObjectMapper objectMapper;

    @Autowired
    public GCPService(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public String substituirPalvrao(String description) throws IOException, UnirestException {
        String jsonString = objectMapper.writeValueAsString(toDTO(description));
        HttpResponse<String> stringHttpResponse = Unirest.post(urlSubstituirPalavrao)
                .header("Content-Type", "application/json")
                .body(jsonString)
                .asString();
        SubstituirPavraoDTO SubstituirPavraoDTO = objectMapper.readValue(stringHttpResponse.getBody(), SubstituirPavraoDTO.class);
        return SubstituirPavraoDTO.getText();
    }

    private SubstituirPavraoDTO toDTO(String description) {
        return new SubstituirPavraoDTO(description);
    }
}
