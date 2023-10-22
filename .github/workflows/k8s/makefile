kube-namespace:
	kubectl apply -f ./namespace.yaml

kube-secret:
	kubectl apply -f ./secret.yaml

kube-deploy:
	kubectl apply -f ./deployment.yaml

kube-service:
	kubectl apply -f ./service.yaml

deploy-kube: kube-namespace kube-secret kube-deploy kube-service

clean-namespace:
	kubectl delete namespace skaffale

deploy-to-minikube:
	minikube service skaffale -n skaffale