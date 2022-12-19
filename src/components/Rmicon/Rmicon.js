import React from "react"
import PropTypes from "prop-types"
import styles from "./rmicon.module.scss"
import sprite from "../../Images/icon-spritesheet.png"

const Rmicon = props => {
    let icon = props.icon
    
    let i = null
    let s = null

    //scale
    if (props.size === 'sm') s = styles.rmIconSm
    if (props.size === 'md') s = styles.rmIconMd

    //icons
    if(icon === 'advertising') i = styles.advertising
    if(icon === 'arrowDown') i = styles.arrowDown
    if(icon === 'arrowFwd') i = styles.arrowFwd
    if(icon === 'bed') i = styles.bed
    if(icon === 'beds1') i = styles.beds1
    if(icon === 'beds2') i = styles.beds2
    if(icon === 'beds3') i = styles.beds3
    if(icon === 'beds4') i = styles.beds4
    if(icon === 'beds5') i = styles.beds5
    if(icon === 'box') i = styles.box
    if(icon === 'buyingv1') i = styles.buyingv1
    if(icon === 'buyingv2') i = styles.buyingv2
    if(icon === 'calcv1') i = styles.calcv1
    if(icon === 'calcv2') i = styles.calcv2
    if(icon === 'caution') i = styles.caution
    if(icon === 'circleInfo') i = styles.circleInfo
    if(icon === 'circleTick') i = styles.circleTick
    if(icon === 'cirlceCross') i = styles.cirlceCross
    if(icon === 'contact') i = styles.contact
    if(icon === 'conveyancing') i = styles.conveyancing
    if(icon === 'costsAndFees') i = styles.costsAndFees
    if(icon === 'documentTicked') i = styles.documentTicked
    if(icon === 'download') i = styles.download
    if(icon === 'emailClosed') i = styles.emailClosed
    if(icon === 'emailClosedTick')i = styles.emailClosedTick
    if(icon === 'emailOpen') i = styles.emailOpen
    if(icon === 'emailOpenTick') i = styles.emailOpenTick
    if(icon === 'feedback') i = styles.feedback
    if(icon === 'form') i = styles.form
    if(icon === 'graph') i = styles.graph
    if(icon === 'homeReport') i = styles.homeReport
    if(icon === 'house') i = styles.house
    if(icon === 'howWorks') i = styles.howWorks
    if(icon === 'insurance') i = styles.insurance
    if(icon === 'intRemovalsv1') i = styles.intRemovalsv1
    if(icon === 'intRemovalsv2') i = styles.intRemovalsv2
    if(icon === 'intRemovalsv3') i = styles.intRemovalsv3
    if(icon === 'intRemovalsv4') i = styles.intRemovalsv4
    if(icon === 'london') i = styles.london
    if(icon === 'media') i = styles.media
    if(icon === 'mortgages') i = styles.mortgages
    if(icon === 'partners') i = styles.partners
    if(icon === 'press') i = styles.press
    if(icon === 'print') i = styles.print
    if(icon === 'processing') i = styles.processing
    if(icon === 'purchase') i = styles.purchase
    if(icon === 'quotes') i = styles.quotes
    if(icon === 'remortgagev1') i = styles.remortgagev1
    if(icon === 'remortgagev2') i = styles.remortgagev2
    if(icon === 'removals') i = styles.removals
    if(icon === 'report') i = styles.report
    if(icon === 'reviewsAndComments') i = styles.reviewsAndComments
    if(icon === 'sale') i = styles.sale
    if(icon === 'salesAndPurchase') i = styles.salesAndPurchase
    if(icon === 'save') i = styles.save
    if(icon === 'scotland') i = styles.scotland
    if(icon === 'search') i = styles.search
    if(icon === 'socialFacebook') i = styles.socialFacebook
    if(icon === 'socialGoogle') i = styles.socialGoogle
    if(icon === 'socialTwitter') i = styles.socialTwitter
    if(icon === 'solicitorsConveyancers') i = styles.solicitorsConveyancers
    if(icon === 'star') i = styles.star
    if(icon === 'statsv1') i = styles.statsv1
    if(icon === 'statsv2') i = styles.statsv2
    if(icon === 'storage') i = styles.storage
    if(icon === 'suggestions') i = styles.suggestions
    if(icon === 'surveying') i = styles.surveying
    if(icon === 'tag') i = styles.tag
    if(icon === 'team') i = styles.team
    if(icon === 'tick') i = styles.tick
    if(icon === 'tradesmen') i = styles.tradesmen
    if(icon === 'van') i = styles.van
    if(icon === 'web') i = styles.web
    if(icon === 'beds6plus') i = styles.beds6plus

    return ( 
        <i className={`${styles.rmIcon} ${i} ${s}`} style={{backgroundImage: `url(${sprite})`}}></i>
     );
}

Rmicon.PropTypes = {
    icon: PropTypes.string,
    size: PropTypes.string
}
 
export default Rmicon;