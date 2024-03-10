interface DiscordLookupResponse {
  status: number;
  success: boolean;
  message: string;
  data: ProfileData;
}

interface ProfileData {
  type: string;
  id: string;
  username: string;
  discriminator: string;
  displayName: string | null;
  avatar?: MediaContent;
  isBot?: boolean;
  isSystem?: boolean;
  banner?: MediaContent;
  avatarDecoration?: string | null;
  accentColor?: string | null;
  badges: Array<UserBadges>;
  timestamp: number;
  createdAt: string;
  accountAge: string;
}

interface MediaContent {
  id?: string | null;
  url?: string | null;
}

interface UserBadges {
  name: string;
  image: string;
}
