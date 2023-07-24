export const GetData = (timeframe) => {
  if (timeframe === "current") {
    return {
      missedSLAs: 22,
      openOrders: 152,
      oldOrders: 32,
      sameDayOrders: 12,
      completedOrders: 87,
      cancelledOrders: 3,
      openScans: 410,
      orphanedScans: 24,
      totalScans: 500,
      openWarmupRequests: 52,
      oldWarmupRequests: 10,
      unsubmittedRequisitions: 21,
      openComplaints: 5,
      unansweredComplaints: 2,
      viewedAccessionsY: 15,
      viewedAccessionsT: 20,
      viewedAccessionsByPathologistY: 16,
      viewedAccessionsByPathologistT: 22,
    };
  } else {
    return {
      orders: 21,
      completedOrders: 756,
      cancelledOrders: 23,
      slaCompliantOrders: 453,
      slaViolativeOrders: 100,
      totalScans: 5847,
      automatchedScans: 4732,
      manualMatchedScans: 421,
      deletedScans: 231,
      orphanedScans: 24,
      openWarmupRequests: 52,
      oldWarmupRequests: 10,
      unsubmittedRequisitions: 21,
      openComplaints: 5,
      unansweredComplaints: 3,
      numViewsYesterday: 15,
      numViewsToday: 20,
      numViewsByPathologistYesterday: 16,
      numViewsByPathologistToday: 22,
    };
  }
};
