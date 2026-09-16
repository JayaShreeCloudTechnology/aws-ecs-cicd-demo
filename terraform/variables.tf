variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "ap-south-1"
}

variable "availability_zone" {
  description = "Availability Zone"
  type        = string
  default     = "ap-south-1a"
}

variable "project_name" {
  description = "Project name"
  type        = string
  default     = "aws-ecs-cicd"
}

variable "ecr_repository" {
  description = "ECR repository name"
  type        = string
  default     = "aws-ecs-cicd-app"
}

variable "ecs_cluster" {
  description = "ECS cluster name"
  type        = string
  default     = "aws-ecs-cicd-cluster"
}

variable "ecs_service" {
  description = "ECS service name"
  type        = string
  default     = "aws-ecs-cicd-service"
}

variable "ecs_task_family" {
  description = "ECS task definition family"
  type        = string
  default     = "aws-ecs-cicd-task"
}

variable "container_name" {
  description = "ECS container name"
  type        = string
  default     = "aws-ecs-cicd-app"
}
