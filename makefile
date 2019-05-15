main: namespace init-ingress-mandatory deployment init-ingress

namespace:
	kubectl apply -f ./kube/namespace.yaml

init-ingress-mandatory:
	kubectl apply -f ./kube/deployment-mandatory.yaml \
	&& kubectl apply -f ./kube/cloud-generic.yaml

deployment:
	kubectl apply -f ./kube/deployment.yaml

init-ingress:
	kubectl apply -f ./kube/ingress.yaml

terminate:
	kubectl delete -f ./kube