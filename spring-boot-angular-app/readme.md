### Spring Boot Angular Application
This repo contains examples of how to containerize a Spring Boot + Angular application.

Snippets:
- Simple app: Spring boots serves angular through its static resources.
- Backend/Frontend separation: Both frontend and backend are running separately in their own ports.
- Reverse proxy with Nginx: Nginx forwards requests either to the frontend or backend.
- Reverse proxy with Traefik: Traefik forwards requests either to the frontend or backend.

### How to run
If you're running a unix based OS you can use the `make` utility:

```bash
cd <example>
make app
```

Or you can run the docker compose directly:
```
cd <example>
docker compose -d --build
```
