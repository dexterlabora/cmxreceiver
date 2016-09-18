DOCKER_ACCOUNT=objectisadvantag

dimage:
	docker build -t $(DOCKER_ACCOUNT)/cmxreceiver .

drun:
	docker run -it -p 8080:1890 $(DOCKER_ACCOUNT)/cmxreceiver:latest