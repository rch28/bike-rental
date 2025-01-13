export interface BlogType {
  id: string; // UUID
  title: string;
  description: string; // Since we're using `HTMLField`, the description will be HTML string
  image: string | null; // Image can be null if not provided
  author: string; // Author's id
  created_at: string; // Date in ISO 8601 string format
  updated_at: string; // Date in ISO 8601 string format
}
