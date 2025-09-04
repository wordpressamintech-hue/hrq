// Simple KV store implementation using Deno KV
const kv = await Deno.openKv();

export async function set(key: string, value: any): Promise<void> {
  await kv.set([key], value);
}

export async function get(key: string): Promise<any> {
  const result = await kv.get([key]);
  return result.value;
}

export async function del(key: string): Promise<void> {
  await kv.delete([key]);
}

export async function getByPrefix(prefix: string): Promise<{ key: string; value: any }[]> {
  const results = [];
  const iter = kv.list({ prefix: [prefix] });
  
  for await (const entry of iter) {
    results.push({
      key: entry.key[0] as string,
      value: entry.value,
    });
  }
  
  return results;
}