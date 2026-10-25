/**
 * 紫花油 ZIHUA 客服 — 萬寧／屈臣氏門市庫存快照（靜態）。
 * asOf／manningsAsOf／watsonsAsOf 有值＝該渠道已載入；請勿當 live stock。
 * 只含「有貨／庫存緊張」舖；無庫存舖唔會出現。
 * 屈臣氏庫存查詢只覆蓋約 177 間（非電話簿全部）——唔好將未列出嘅舖標「沒有此產品」。
 *
 * 填入方式：將 raw scrape JSON merge 入 products[productId].mannings|watsons
 * （建議用電話簿 fuzzy match 補 tel；見 README）。
 */
window.ZIHUA_STOCK = {
  asOf: "",
  manningsAsOf: "",
  watsonsAsOf: "",
  source: "mannings.com.hk / watsons.com.hk store stock checkers",
  disclaimer: "快照非即時庫存；到舖前請致電確認。",
  products: {
    // "oil-classic-12": {
    //   mannings: { code: "882506", url: "...", storeCount: 0, stores: [{name,address,district,tel,stockStatus}] },
    //   watsons:  { code: "BP_224025", url: "...", storeCount: 0, stores: [...] }
    // },
    // "oil-classic-26": { mannings: {...}, watsons: {...} },
    // "spray-lavender": { mannings: {...}, watsons: {...} }
  }
};
