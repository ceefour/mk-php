<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\FOSRestController;
use AppBundle\Entity\Restaurant;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route(defaults={"_format": "json"})
 */
class RestaurantController extends FOSRestController
{
    /**
     * @Route("/restaurants/", name="restaurants-index")
     */
    public function indexAction(Request $request)
    {
        if ($request->getMethod() == 'POST') {
            $data = json_decode($request->getContent(), true);

            $restaurant = new Restaurant();
//            $restaurant->setName('Sedap Malam');
//            $restaurant->setDescription('Nasi goreng dan seafood');
//            $restaurant->setAddress('depan aula barat ITB');
            $restaurant->setName($data['name']);
            if (isset($data['description'])) {
                $restaurant->setDescription($data['description']);
            }
            if (isset($data['address'])) {
                $restaurant->setAddress($data['address']);
            }
            $em = $this->getDoctrine()->getManager();
            $em->persist($restaurant);
            $em->flush();
            return new Response('{"message": "Restaurant created"}');
        } else {
            $restaurantRepo = $this->getDoctrine()->getRepository('AppBundle:Restaurant');
            $restaurants = $restaurantRepo->findAll();
            //$restaurants = array( array('name' => 'Hendy') );
            $view = $this->view($restaurants, 200);
            return $this->handleView($view);
        }
    }
    
}
