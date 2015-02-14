<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\FOSRestController;
use AppBundle\Entity\Place;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route(defaults={"_format": "json"})
 */
class PlaceController extends FOSRestController
{
    /**
     * @Route("/places/", name="places-index")
     */
    public function indexAction(Request $request)
    {
        if ($request->getMethod() == 'POST') {
            $data = json_decode($request->getContent(), true);

            $place = new Place();
//            $place->setName('Sedap Malam');
//            $place->setDescription('Nasi goreng dan seafood');
//            $place->setAddress('depan aula barat ITB');
            $place->setName($data['name']);
            if (isset($data['description'])) {
                $place->setDescription($data['description']);
            }
            if (isset($data['address'])) {
                $place->setAddress($data['address']);
            }
            $em = $this->getDoctrine()->getManager();
            $em->persist($place);
            $em->flush();
            return new Response('{"message": "Place created"}');
        } else {
            $placeRepo = $this->getDoctrine()->getRepository('AppBundle:Place');
            $places = $placeRepo->findAll();
            //$places = array( array('name' => 'Hendy') );
            $view = $this->view($places, 200);
            return $this->handleView($view);
        }
    }

}
