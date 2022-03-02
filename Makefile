all: 
	docker-compose down && docker build -t web-base . && docker-compose up -d
