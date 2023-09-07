nest new
	auth-nestjs

add docker-compose.yml file 
docker-compose up -d

docker-compose.yml

nest g resource users

nest g module iam
nest g controller iam/authentication
nest g service iam/authentication
nest g s iam/authentication/social/google-authentication --flat
nest g co iam/authentication/social/google-authentication --flat

Information Access Management (IAM): В контексте DTO (Data Transfer Object), "IAM" означает управление доступом к информации или данным. Это может включать в себя определение, какие пользователи или системы имеют доступ к определенным данным и какие правила и политики регулируют этот доступ.