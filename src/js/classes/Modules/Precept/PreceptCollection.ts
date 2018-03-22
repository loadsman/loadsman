import Precept from '../../Entities/Precept'

export default class PreceptCollection {
  precepts: Precept[] = []

  setPrecepts (precepts: Precept[]): void {
    this.precepts = precepts
  }
}