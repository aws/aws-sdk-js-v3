# script to be run in the root of the checkout of awslabs/smithy-typescript.

COMMIT=main

git fetch origin $COMMIT
git checkout -f $COMMIT
git show -s HEAD
