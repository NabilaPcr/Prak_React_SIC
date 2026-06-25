export const TIER_CONFIG = {
  Bronze: {
    minPoints: 0,
    maxPoints: 499,
    discount: 0,
  },
  Silver: {
    minPoints: 500,
    maxPoints: 999,
    discount: 5,
  },
  Gold: {
    minPoints: 1000,
    maxPoints: 1999,
    discount: 10,
  },
  Platinum: {
    minPoints: 2000,
    maxPoints: Infinity,
    discount: 15,
  },
};

export const getPointsByTier = (tier) => {
  switch (tier) {
    case "Bronze":
      return 250;
    case "Silver":
      return 750;
    case "Gold":
      return 1500;
    case "Platinum":
      return 2500;
    default:
      return 0;
  }
};

export const getDiscountByTier = (tier) => {
  return TIER_CONFIG[tier]?.discount || 0;
};

export const getTierColor = (tier) => {
  switch (tier) {
    case "Gold":
      return "bg-orange-100 text-orange-600 border border-orange-200";

    case "Silver":
      return "bg-slate-100 text-slate-600 border border-slate-200";

    case "Bronze":
      return "bg-amber-700/10 text-amber-800 border border-amber-200";

    case "Platinum":
      return "bg-purple-100 text-purple-600 border border-purple-200";

    default:
      return "bg-gray-100 text-gray-600 border border-gray-200";
  }
};
export const getNextTier = (tier) => {
  switch (tier) {
    case "Bronze":
      return "Silver";

    case "Silver":
      return "Gold";

    case "Gold":
      return "Platinum";

    default:
      return null;
  }
};

export const getPointsToNextTier = (tier) => {
  switch (tier) {
    case "Bronze":
      return 500;

    case "Silver":
      return 1000;

    case "Gold":
      return 2000;

    default:
      return null;
  }
};