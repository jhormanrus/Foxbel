import type { SearchAlbum } from "@/models/search.model";
import api from "@/services/api";

const DeezerService = {
  searchAlbum(query: string): Promise<SearchAlbum> {
    return api(`/search-album?q=${query}`);
  },

  getAlbum(id: number): Promise<SearchAlbum> {
    return api(`/album/${id}`);
  },
};

export default DeezerService;
