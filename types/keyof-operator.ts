/*
 * keyof types become especially useful when combined with mapped types 
 */

type PointP = { x: number, y: number }
type keyOfP = keyof PointP //type P = keyof PointP

type Arryish = { [n: number]: unknown }
type keyOfA = keyof Arryish// type of keyOfA is number


type Mapish = { [k: string]: boolean }
// type M = string | number,
// this is because JavaScript object keys are always coerced to a string, so obj[0] is always the same as obj["0"].
type M = keyof Mapish
