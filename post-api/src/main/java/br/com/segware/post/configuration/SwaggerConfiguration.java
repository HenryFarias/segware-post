package br.com.segware.post.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.Parameter;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Configuration
@EnableSwagger2
public class SwaggerConfiguration {

    @Bean
    public Docket apiConfigDocs() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("br.com.segware.post.controller"))
                .paths(PathSelectors.any())
                .build()
                .globalOperationParameters(commonParameters())
                .apiInfo(infoDocs());
    }

    private List<Parameter> commonParameters() {
        return Collections.singletonList(new ParameterBuilder()
                .name("Authorization")
                .defaultValue("Bearer access_token")
                .description("Autorização JWT")
                .modelRef(new ModelRef("string"))
                .parameterType("header")
                .required(true)
                .build());
    }

    private ApiInfo infoDocs() {
        return new ApiInfo(
                "Desafio - Sistema de postagens",
                "Documetnação baseada na aplicação de Sistema de postagens.",
                "1.0",
                "Terms",
                new Contact("Henry", "" , "henrysjfarias@gmail.com"),
                "Apache License",
                "Url",
                new ArrayList<>()
        );
    }

}
