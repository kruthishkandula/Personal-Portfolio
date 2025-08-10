import { bounceInDown, bounceInLeft, bounceInRight, bounceInUp, fadeIn, jello, slideInLeft, slideInRight, swing, tada, wobble, zoomIn, zoomOut } from "react-animations";
import { keyframes, styled } from "styled-components";

export const BounceLeft = styled.div`animation: 1s ${keyframes`${bounceInLeft}`} linear`
export const BounceRight = styled.div`animation: 1s ${keyframes`${bounceInRight}`} linear`
export const BounceUp = styled.div`animation: 0.2s ${keyframes`${bounceInUp}`} ease-out`
export const BounceDown = styled.div`animation: 1s ${keyframes`${bounceInDown}`} linear`
export const FadeIn = styled.div`animation: 0.5s ${keyframes`${fadeIn}`} ease-in`
export const FadeOut = styled.div`animation: 1s ${keyframes`${bounceInRight}`} linear`
export const ZoomOut = styled.div`animation: 1s ${keyframes`${zoomOut}`} ease-in`
export const ZoomIn = styled.div`animation: 1s ${keyframes`${zoomIn}`} ease-in`
export const Wobble = styled.div`animation: 1s ${keyframes`${wobble}`} ease-in`
export const Tada = styled.div`animation: 1s ${keyframes`${tada}`} ease-in`
export const Jellow = styled.div`animation: 1s ${keyframes`${jello}`} ease-in`
export const Swing = styled.div`animation: 1s ${keyframes`${swing}`} linear`
export const SlideInRight = styled.div`animation: 0.2s ${keyframes`${slideInRight}`} ease-in`
export const SlideInLeft = styled.div`animation: 0.2s ${keyframes`${slideInLeft}`} linear `
