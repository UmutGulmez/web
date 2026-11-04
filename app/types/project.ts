export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  /** Short blurb shown on the card */
  description: string;
  year: string | number;
  viewUrl?: string;
  sourceUrl?: string;
  tags?: string[];
  featured?: boolean;
  /** 0-4, picks the cover art style. Defaults to list position. */
  pattern?: number;

  /* ── Popup details (all optional) ── */
  /** Paragraphs shown in the popup */
  details?: string[];
  /** Image URLs for the gallery. Falls back to generated placeholders. */
  images?: string[];
  role?: string;
  status?: string;
  duration?: string;
  stack?: string[];
  highlights?: string[];
  stats?: ProjectStat[];
}
