import { TOP_RATED_LABEL, UPCOMING_LABEL } from '../Contants/dictionary';
import { AppUrls } from "../types/ApiTypes";
import { POPULAR_LABEL } from '../../.history/src/Contants/dictionary_20230402221429';



export const NavBarLinks = [
  {
    link_label: UPCOMING_LABEL,
    to: AppUrls.UPCOMING
    
  },
  {
    link_label: TOP_RATED_LABEL,
    to: AppUrls.TOP_RATED,
    
  },
  {
    link_label: POPULAR_LABEL,
    to: AppUrls.POPULAR,
    
  },

];