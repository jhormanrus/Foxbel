import type { SearchAlbum } from "@/models/search-album.model";
import type { Album } from "@/models/album.model";
import api from "@/services/api";

const DeezerService = {
  searchAlbum(query: string): Promise<SearchAlbum> {
    return api(`/api/search-album?q=${query}`);
  },

  getAlbum(id: number): Promise<Album> {
    return api(`/api/album/${id}`);
  },
};

export default DeezerService;
