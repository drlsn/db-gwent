package entities

import basic.isAnyOf

enum CardType:
  case Leader
  case Hero
  case Unit
  case Special
  case Weather

enum CardRowType:
  case Close
  case Ranged
  case CloseOrRange
  case Siege

enum TargetRowType:
  case Any
  case Close
  case Ranged
  case Siege

extension (source: CardRowType)
  def is(target: TargetRowType): Boolean =
    source match
      case CardRowType.Close if target.isAnyOf(TargetRowType.Close, TargetRowType.Any) => true
      case CardRowType.Ranged if target.isAnyOf(TargetRowType.Ranged, TargetRowType.Any) => true
      case CardRowType.CloseOrRange if target.isAnyOf(TargetRowType.Ranged, TargetRowType.Close, TargetRowType.Any) => true
      case CardRowType.Siege if target.isAnyOf(TargetRowType.Siege, TargetRowType.Any) => true
      case _ => false

extension (source: TargetRowType)
  def is(target: CardRowType): Boolean = target.is(source)
