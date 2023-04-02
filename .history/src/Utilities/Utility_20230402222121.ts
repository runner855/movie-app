import { TOP_RATED_LABEL, UPCOMING_LABEL, POPULAR_LABEL } from '../Contants/dictionary';
import { AppUrls } from "../types/ApiTypes";



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