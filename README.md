This an E-commerce Platform (Microservices-based) apps that address 
Multiple microservices (cart, payments, user, orders) 
Database management
Event-driven communication
Caching & performance optimization
CI/CD automation from code to production (Github action)
Kubernetes deployments
Observability
Secrets & configuration management
Security, role-based access, and compliance considerations


Tools used;

##Services

Frontend (React)
Backend APIs (Node.js)
Payment Service ()
User Authentication Service
Order Processing Service (async workers)

##Infrastructure

Kubernetes (AKS)
PostgreSQL
Redis
RabbitMQ/Kafka (event bus)
MinIO or S3 (object storage for product images)

##DevOps Stack

Terraform for infra provisioning
GitHub Actions
Prometheus + Grafana (metrics)
Vault or Sealed Secrets (secret management)


Blue/Green or Canary deployments
Horizontal Pod Autoscaling (HPA) + KEDA event-based scaling
Resilience patterns (circuit breakers, retries)
Centralized API Gateway & ingress