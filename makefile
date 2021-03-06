main: namespace init-ingress-mandatory deployment init-ingress

namespace:
	kubectl apply -f ./kube/namespace.yaml

init-ingress-mandatory:
	kubectl apply -f ./kube/deployment-mandatory.yaml \
	&& kubectl apply -f ./kube/cloud-generic.yaml

deployment:
	kubectl apply -f ./kube/persistVolumn.yaml \
	&& kubectl apply -f ./kube/deployment-a.yaml \
	&& kubectl apply -f ./kube/deployment-b.yaml

init-ingress:
	kubectl apply -f ./kube/ingress.yaml

terminate:
	kubectl delete -f ./kube

docpose-build:
	docker-compose up --build

docpose:
	docker-compose up