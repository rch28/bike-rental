export type UserProfile = {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  profile_picture?: string | File;
  is_superuser: boolean;
  is_active: boolean;
};
