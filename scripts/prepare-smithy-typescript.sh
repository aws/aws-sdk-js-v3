# script to be run in the root of the checkout of awslabs/smithy-typescript.

COMMIT=1f9fcad7015cdf639e98d4e951ceddc2a1ec11db

git fetch origin $COMMIT
git checkout -f $COMMIT
git show -s HEAD
