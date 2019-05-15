main:
	echo "Hello world"

namespace:
	kubectl apply -f ./kube/namespace

terminate:
	kubectl delete -f ./kube