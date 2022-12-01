export interface ChapterInfo {
  chapter: string,
  count: number,
  id: string,
}

export interface Volume {
  volume: string,
  count: number,
  chapters: Record<string, ChapterInfo>
}

export type Volumes = Record<string, Volume>;
