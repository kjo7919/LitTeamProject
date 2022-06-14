package com.example.lit.domain.vo;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Data
public class ReviewVO {
    private Long reviewNumber;
    private Long userNumber;
    private Long projectNumber;
    private String reviewContent;
    private String reviewRegisterDate;

    private List<ReviewFileVO> reviewFileList;
}
