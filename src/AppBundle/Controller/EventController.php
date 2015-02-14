<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\FOSRestController;
use AppBundle\Entity\Event;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route(defaults={"_format": "json"})
 */
class EventController extends FOSRestController
{
    /**
     * @Route("/events/", name="events-index")
     */
    public function indexAction(Request $request)
    {
        if ($request->getMethod() == 'POST') {
            $data = json_decode($request->getContent(), true);

            $event = new Event();
//            $event->setName('Sedap Malam');
//            $event->setDescription('Nasi goreng dan seafood');
//            $event->setAddress('depan aula barat ITB');
            $event->setName($data['name']);
            if (isset($data['description'])) {
                $event->setDescription($data['description']);
            }
            if (isset($data['address'])) {
                $event->setAddress($data['address']);
            }
            $em = $this->getDoctrine()->getManager();
            $em->persist($event);
            $em->flush();
            return new Response('{"message": "Attraction created"}');
        } else {
            $eventRepo = $this->getDoctrine()->getRepository('AppBundle:Event');
            $events = $eventRepo->findAll();
            //$events = array( array('name' => 'Hendy') );
            $view = $this->view($events, 200);
            return $this->handleView($view);
        }
    }

}
