import { Import, Item, Purchase } from "../collections/collections";
import { Meteor } from "meteor/meteor";
Meteor.methods({
  "purchase.add"(doc) {
    let oldPurchase = Purchase.findOne({ itemId: doc.itemId });
    let importDoc = Object.assign({}, doc);
    if (!oldPurchase) {
      importDoc.remains = 0;
      Import.insert(importDoc);
      return Purchase.insert(doc);
    } else {
      importDoc.remains = oldPurchase.qty;
      Import.insert(importDoc);
      oldPurchase.qty += doc.qty;
      oldPurchase.cost = doc.cost;
      oldPurchase.price = doc.price;
      oldPurchase.date = doc.date;
      oldPurchase.supplierId = doc.supplierId;
      return Purchase.update({ _id: oldPurchase._id }, { $set: oldPurchase });
    }
  },
  "purchase.find"() {
    let data = [];
    Purchase.find().forEach((doc) => {
      doc.name = Item.findOne({ _id: doc.itemId })?.name;
      data.push(doc);
    });
    return data;
  },
});
