import { DesignAgent } from "./agent";
import { routeAgentRequest } from "agents";

export { DesignAgent };

interface Env {
  DesignAgent: DurableObjectNamespace;
  GOOGLE_API_KEY: string;
}

export default {
  async fetch(request: Request, env: Env) {
    const response = await routeAgentRequest(request, env);

    if (!response) {
      return new Response("Not found", { status: 404 });
    }

    return response;
  },
} satisfies ExportedHandler<Env>;
