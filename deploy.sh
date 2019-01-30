#!/bin/bash
docker push dolittle/signup
kubectl patch deployment signup --namespace dolittle-campaigns -p "{\"spec\":{\"template\":{\"metadata\":{\"labels\":{\"date\":\"`date +'%s'`\"}}}}}"