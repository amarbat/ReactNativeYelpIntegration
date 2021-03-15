import axios from 'axios';

export default axios.create ({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:'Bearer UOhltebG_KiWvR9cw-VhxuS8l3kT43_giQ4ze2CTjtX3vVmGjW17X_Gclv4ldEhN2fSKf5xknTavRI-Dec6vIjQj1XUzkTKTFznWFCCw3qf-gI4byrHiLfnAdAn5X3Yx'
  }
});