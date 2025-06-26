// Scroll animation utility for React components
import { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = (threshold = 0.1, rootMargin = '0px') => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Optionally unobserve after first intersection
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin])

  return [ref, isVisible]
}

export const useStaggeredAnimation = (items, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState(new Set())
  const refs = useRef([])

  useEffect(() => {
    const observers = []

    refs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems(prev => new Set([...prev, index]))
              }, index * delay)
              observer.unobserve(entry.target)
            }
          },
          { threshold: 0.1 }
        )
        observer.observe(ref)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [items.length, delay])

  const setRef = (index) => (el) => {
    refs.current[index] = el
  }

  return [setRef, visibleItems]
}

// Animation component wrapper
export const AnimateOnScroll = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  threshold = 0.1,
  className = ''
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold)

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `animate-${animation}` : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Staggered animation component
export const StaggeredAnimation = ({ 
  children, 
  animation = 'fadeInUp', 
  staggerDelay = 100,
  className = ''
}) => {
  const items = Array.isArray(children) ? children : [children]
  const [setRef, visibleItems] = useStaggeredAnimation(items, staggerDelay)

  return (
    <>
      {items.map((child, index) => (
        <div
          key={index}
          ref={setRef(index)}
          className={`${className} ${visibleItems.has(index) ? `animate-${animation}` : 'opacity-0'}`}
        >
          {child}
        </div>
      ))}
    </>
  )
}

export default {
  useScrollAnimation,
  useStaggeredAnimation,
  AnimateOnScroll,
  StaggeredAnimation
}

