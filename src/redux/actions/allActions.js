import axios from "axios";
import {
  CHECK_AUTH,
  GET_IP_DATA,
  GET_SURF_ADS,
  GET_SURF_ADS_ID,
} from "../types/allTypes";
import { decryptToken } from "../../Utilities/token/Token_Crypt";

export const checkAuth = (token) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_API_HOST
        }/fastCreditCards/auth/checkAuthExists.php`,
        {
          headers: {
            Authorization: `Bearer ${decryptToken(token)}`,
          },
        }
      );

      dispatch({
        type: CHECK_AUTH,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: CHECK_AUTH,
        payload: { error: true, message: err.message },
      });
    }
  };
};

export const getIpData = (_) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_IP_INFO}?token=fbf02ef6890d78`
      );

      dispatch({
        type: GET_IP_DATA,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: GET_IP_DATA,
        payload: { error: true, message: err.message },
      });
    }
  };
};

export const getAllSurfAds = (_) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_HOST}/fastCreditCards/ads/getSurfAds.php`
      );

      dispatch({
        type: GET_SURF_ADS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_SURF_ADS,
        payload: { error: true, message: err.message },
      });
    }
  };
};

export const getSurfAdsId = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_API_HOST
        }/fastCreditCards/ads/get_surf_adsById.php?surf_id=${id}`
      );

      dispatch({
        type: GET_SURF_ADS_ID,
        payload: res.data.ads,
      });
    } catch (err) {
      dispatch({
        type: GET_SURF_ADS_ID,
        payload: { error: true, message: err.message },
      });
    }
  };
};
