package com.cricketPedia.IPLInfo.Repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.cricketPedia.IPLInfo.Model.MatchSummary;

@Repository
public interface IplMatchRepository extends PagingAndSortingRepository <MatchSummary, Long>{

	Page<MatchSummary> findBySeason(int season, Pageable pageable);

	Page<MatchSummary> findByTeam1(String teamName, Pageable pageable);

	

	// Page<MatchSummary> findByTeam1(Pageable pageable);
	
	

		
}
