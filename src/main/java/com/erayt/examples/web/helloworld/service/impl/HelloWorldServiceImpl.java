package com.erayt.examples.web.helloworld.service.impl;

import com.erayt.examples.web.helloworld.service.HelloWorldService;

public class HelloWorldServiceImpl implements HelloWorldService {

	@Override
	public String hello(String userId) {
		return "Hello " + userId;
	}

}
