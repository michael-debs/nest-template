#!/bin/bash

# Path to your DataSource file
DATASOURCE="src/core/database/data-source.ts"

# Function to show usage
usage() {
  echo "Usage:"
  echo "  $0 generate <MigrationName>   Generate a new migration"
  echo "  $0 run                        Run all pending migrations"
  echo "  $0 revert                     Revert the last migration"
  exit 1
}

# Check command
COMMAND=$1
ARG=$2

# Ensure required tools are installed
if [ ! -x "./node_modules/.bin/ts-node" ]; then
  echo "❌ ts-node is not installed. Please run: pnpm install --save-dev ts-node"
  exit 1
fi

case "$COMMAND" in
  generate)
    if [ -z "$ARG" ]; then
      echo "❌ Missing migration name."
      usage
    fi
    echo "🚀 Generating migration: $ARG"
    npx ts-node --require tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate src/core/database/migrations/"$ARG" -d "$DATASOURCE"
    ;;

  run)
    echo "📥 Running pending migrations..."
    npx ts-node --require tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run -d "$DATASOURCE"
    ;;

  revert)
    echo "↩️ Reverting last migration..."
    npx ts-node --require tsconfig-paths/register ./node_modules/typeorm/cli.js migration:revert -d "$DATASOURCE"
    ;;

  *)
    echo "❓ Unknown command: $COMMAND"
    usage
    ;;
esac
