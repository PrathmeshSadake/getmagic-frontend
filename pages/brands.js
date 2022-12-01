import React from "react";
import { useRouter } from "next/router";

import UGC from "../components/variants/UGC";
import General from "../components/variants/General";
import Students from "../components/variants/Students";
import Influencer from "../components/variants/Influencer";

const BrandVariants = () => {
  const router = useRouter();
  const { type } = router.query;

  if (type == "ugc" || type == "UGC") return <UGC />;
  else if (type == "student" || type == "Student") return <Students />;
  else if (type == "influencer" || type == "Influencer") return <Influencer />;
  else return <General />;
};

export default BrandVariants;
